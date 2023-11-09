import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import Axios from 'axios';

class Component15 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1, // เริ่มต้นด้วย ID 1 หรือค่า ID ตามที่คุณต้องการ
      n: 0,
      numbers: "",
      average: null,
      max: null,
      min: null,
      sd: null,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleNumbersInput = () => {
    const { id, n, numbers } = this.state;

    if (n > 0 && numbers) {
      this.calculateStatistics(n, numbers);
    } else {
      Axios.get(`http://localhost:7777/kor15/${id}`)
      .then((response) => {
        const data = response.data; // ไม่ต้องใช้ [0] เนื่องจากเราอ้างอิงโดยใช้ ID
        const numbers = data.number;
        this.setState({ numbers });

          if (data) {
            const { n, number } = data;
            this.setState({ n, numbers: number });

            this.calculateStatistics(n, number);
          } else {
            console.error("Data not found for the specified ID.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data from the server:", error);
        });
    }
  }

  calculateStatistics = (n, numbers) => {
    const parsedNumbers = numbers.split(' ').map(Number);
    const sum = parsedNumbers.reduce((acc, num) => acc + num, 0);
    const average = sum / n;
    const max = Math.max(...parsedNumbers);
    const min = Math.min(...parsedNumbers);
    const squaredDifferences = parsedNumbers.map(num => (num - average) ** 2);
    const sd = Math.sqrt(squaredDifferences.reduce((acc, val) => acc + val, 0) / n);

    this.setState({ average, max, min, sd });
  }

  handleSaveData = () => {
    const { id, n, numbers } = this.state;

    // ส่งข้อมูลใหม่ไปยัง API เพื่อบันทึกลงใน MySQL
    Axios.post("http://localhost:7777/kor15/create", {
      id: id,
      n: n,
      number: numbers,
    })
      .then((response) => {
        // หลังจากบันทึกข้อมูลเรียบร้อย คุณสามารถดำเนินการอื่น ๆ ตามต้องการ
        console.log("Data saved successfully");
        // เป็นตัวอย่าง ล้างค่า n และ number ใหม่
        this.setState({ n: 0, numbers: "" });
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  }

  handleDeleteData = () => {
    const { id } = this.state;
  
    // ทำการลบข้อมูลโดยอ้างอิง ID ที่ถูกเลือก
    Axios.delete(`http://localhost:7777/kor15/${id}`)
      .then((response) => {
        // หลังจากลบข้อมูลเรียบร้อย คุณสามารถดำเนินการอื่น ๆ ตามต้องการ
        console.log("Data deleted successfully");
        // เป็นตัวอย่าง ล้างค่า n และ numbers ใหม่
        this.setState({ n: 0, numbers: "" });
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }

  createBarChart = () => {
    const { min, max, average, sd } = this.state;
  
    const data = [
      {
        x: ['Min', 'Max', 'Average', 'SD'],
        y: [min, max, average, sd],
        type: 'bar',
      },
    ];
  
    const layout = {
      title: 'Bar Chart Comparison',
    };
  
    return <Plot data={data} layout={layout} />;
  };   

  render() {
    const { id, n, numbers, average, max, min, sd } = this.state;

    return (
      <div>
        <h1>[Array_Operation]</h1>
        <p>ป้อน ID ของข้อมูลที่ต้องการคำนวณ:</p>
        <input
          type="number"
          name="id"
          value={id}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleDeleteData}>ลบข้อมูล</button>
        <div>
          <p>ป้อนค่า n:</p>
          <input
            type="number"
            name="n"
            value={n}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSaveData}>บันทึกข้อมูลใหม่</button>
        </div>
        <div>
          <p>ป้อนค่า number (คั่นด้วยช่องว่าง):</p>
          <input
            type="text"
            name="numbers"
            value={numbers}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleNumbersInput}>คำนวณ</button>
        </div>
        {average !== null && (
          <p>ค่าเฉลี่ย: {average.toFixed(2)}</p>
        )}
        {max !== null && (
          <p>ค่ามากสุด: {max}</p>
        )}
        {min !== null && (
          <p>ค่าน้อยสุด: {min}</p>
        )}
        {sd !== null && (
          <p>ค่า SD: {sd.toFixed(2)}</p>
        )}
        {this.createBarChart()}
      </div>
    );
  }
}

export default Component15;
