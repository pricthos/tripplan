import React, { useState } from "react";
import './App.css';
import travelData from "./travelData";
import logo from "./images/logo.svg";
import { Image } from 'antd';

// 여행 데이터 배열

function App() {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);

    return (
        <div className="wrap">
            <div className="top">
                <img src={logo} alt=""/>{travelData.title}
            </div>

            <div className="tab">
                {travelData.days.map((day, index) => (
                    <ul
                        key={index}
                        className={selectedDayIndex === index ? "on" : ""}
                        onClick={() => setSelectedDayIndex(index)}
                    >
                        {day.date}
                    </ul>
                ))}
            </div>

            <div className="list">
                {travelData.days[selectedDayIndex].lists.map((item, index) => (
                    <ul key={index} className={item.type}>
                        {item.type === "move" ? (
                            <>
                                <div className={`ico ${item.icon}`} />
                                <div className="price">{item.price}</div>
                                <div className="info">
                                    <li className="date">{item.info.time}</li>
                                    <li className="title">{item.info.title}</li>
                                    <li className="txt">{item.info.details}</li>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="info">
                                    <li className="date">{item.info.time}</li>
                                    <li className="title">{item.info.title}</li>
                                    <li className="txt">{item.info.details}</li>
                                </div>
                                <div className="thumb">
                                    {item.thumbs.length > 0 &&  (
                                        <div className="qty">{item.thumbs.length}</div>
                                    )}
                                    <div className="box">
                                        <Image.PreviewGroup>
                                            {item.thumbs.length > 0 && item.thumbs.map((thumb, idx) => (
                                                <Image
                                                    key={idx}
                                                    width={50}
                                                    height={50}
                                                    src={thumb}
                                                />
                                            ))}
                                        </Image.PreviewGroup>
                                    </div>
                                </div>
                                {item.links.length > 0 && (
                                    <div className="link">
                                        {item.links.map((link, idx) => (
                                            <li key={idx} className="default">
                                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                                            </li>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default App;
