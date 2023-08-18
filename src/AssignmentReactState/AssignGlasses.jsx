import React, { Component } from "react";
import "./assignGlasses.css";

export default class AssignGlasses extends Component {
  arrGlass = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glassItem: {
      id: "",
      price: "",
      name: "",
      url: "",
      desc: "",
    },
  };

  render() {
    return (
      <div id="assignGlasses">
        <div className="banner">TRY GLASSES APP ONLINE</div>
        <div className="content d-flex justify-content-evenly">
          <div className="card cardLeft">
            <img src="./img/v1.png" className="card-img-top" alt="" />
            <div className="card-body">
              <p style={{ color: "orchid" }}>GUCCI G8850U</p>
              <p>30$</p>
              <p>
                Light pink square lenses define these sunglasses, ending with
                amother of pearl effect tip.
              </p>
            </div>
          </div>
          <div className="cardRight">
            <img
              src={this.state.glassItem.url}
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p style={{ color: "orchid" }}>{this.state.glassItem.name}</p>
              <p>{this.state.glassItem.price}</p>
              <p>{this.state.glassItem.desc}</p>
            </div>
          </div>
        </div>
        <div className="storeGlass row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {this.arrGlass.map((item, index) => {
            const { url } = item;
            return (
              <div className="col">
                <div className="p-3 border bg-light">
                  <button
                    key={index}
                    onClick={() => {
                      // ở đây cần một đường dẫn hình ứng với nút bấm
                      // set lại item khi click vào nút
                      this.setState({
                        glassItem: item,
                      });
                    }}
                  >
                    <img src={url} className="w-100" alt="" />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="col">
            <div className="p-3 border align-items-center bg-light text-center">
              <button
                className="btn btn-success mb-3"
                onClick={() => {
                  // ở đây cần một đường dẫn hình ứng với nút bấm
                  // set lại item khi click vào nút
                  this.setState({
                    glassItem: {
                      id: "",
                      price: "",
                      name: "",
                      url: "",
                      desc: "",
                    },
                  });
                }}
              >
                NONE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
