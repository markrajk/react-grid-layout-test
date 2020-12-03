import React from 'react'

const BarGraph = () => {
    return (
        <div className="widget-wrapper" id="one" style={{ overflow: 'hidden' }}>
            <div className="widget widget-bar-graph">
                <div className="widget-header">
                    <p className="widget-header-title">
                        Productivity, Attitude and Teamworking
          </p>
                    <p className="widget-header-text">
                        Longterm development chart based on 64 reviews
          </p>
                    <div className="widget-header-icons">
                        <i className="icon-expand-outlined"></i>
                        <i className="icon-cog-outlined"></i>
                    </div>
                </div>
                <div className="widget-body">
                    <div className="bar-graph">
                        <div className="bar-graph-main">
                            <div className="bar-graph-main-data">
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '95%', backgroundColor: '#07487f' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Paul Walker</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >12</span
                                    >
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '80%', backgroundColor: '#818181' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Timothy Dalton</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >14</span
                                    >
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '76%', backgroundColor: '#559a19' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Abraham Wilson</span
                                    >
                                    <span className="bar-graph-main-data-item-amount">7</span>
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '50%', backgroundColor: '#b5b5b5' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Mr Norvorski</span
                                    >
                                    <span className="bar-graph-main-data-item-amount">7</span>
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '63%', backgroundColor: '#f7ab31' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Andrew McBlown</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >11</span
                                    >
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '45%', backgroundColor: '#40a7e8' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Lead Meyer</span
                                    >
                                    <span className="bar-graph-main-data-item-amount">9</span>
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '45%', backgroundColor: '#e8ce40' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Alfred Bing</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >13</span
                                    >
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '30%', backgroundColor: '#818181' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Johan Bond</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >12</span
                                    >
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '52%', backgroundColor: '#f7ab31' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Andrew McBlown</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >11</span
                                    >
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '63%', backgroundColor: '#f7ab31' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Andrew McBlown</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >11</span
                                    >
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '45%', backgroundColor: '#40a7e8' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Lead Meyer</span
                                    >
                                    <span className="bar-graph-main-data-item-amount">9</span>
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '45%', backgroundColor: '#e8ce40' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Alfred Bing</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >13</span
                                    >
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '30%', backgroundColor: '#818181' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Johan Bond</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >12</span
                                    >
                                </div>
                                <div
                                    className="bar-graph-main-data-item"
                                    style={{ width: '52%', backgroundColor: '#f7ab31' }}
                                >
                                    <span className="bar-graph-main-data-item-label"
                                    >Andrew McBlown</span
                                    >
                                    <span className="bar-graph-main-data-item-amount"
                                    >11</span
                                    >
                                </div>
                            </div>

                            <div className="bar-graph-back">
                                <div className="bar-graph-back-x">
                                    <div className="bar-graph-back-x-line"></div>
                                    <div className="bar-graph-back-x-line"></div>
                                    <div className="bar-graph-back-x-line"></div>
                                    <div className="bar-graph-back-x-line"></div>
                                    <div className="bar-graph-back-x-line"></div>
                                </div>
                            </div>

                            <div className="bar-graph-x-axis">
                                <p className="bar-graph-x-axis-item">Bad (1.0)</p>
                                <p className="bar-graph-x-axis-item">Weak (2.0)</p>
                                <p className="bar-graph-x-axis-item">Ok (3.0)</p>
                                <p className="bar-graph-x-axis-item">Good (4.0)</p>
                                <p className="bar-graph-x-axis-item">Great (5.0)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BarGraph
