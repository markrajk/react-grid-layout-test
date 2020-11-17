import React from 'react'

const BarGraph = () => {
    return (
        <div class="widget-wrapper" id="one" style={{ overflow: 'hidden' }}>
            <div class="widget widget-bar-graph">
                <div class="widget-header">
                    <p class="widget-header-title">
                        Productivity, Attitude and Teamworking
          </p>
                    <p class="widget-header-text">
                        Longterm development chart based on 64 reviews
          </p>
                    <div class="widget-header-icons">
                        <i class="icon-expand-outlined"></i>
                        <i class="icon-cog-outlined"></i>
                    </div>
                </div>
                <div class="widget-body">
                    <div class="bar-graph">
                        <div class="bar-graph-main">
                            <div class="bar-graph-main-data">
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '95%', backgroundColor: '#07487f' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Paul Walker</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >12</span
                                    >
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '80%', backgroundColor: '#818181' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Timothy Dalton</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >14</span
                                    >
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '76%', backgroundColor: '#559a19' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Abraham Wilson</span
                                    >
                                    <span class="bar-graph-main-data-item-amount">7</span>
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '50%', backgroundColor: '#b5b5b5' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Mr Norvorski</span
                                    >
                                    <span class="bar-graph-main-data-item-amount">7</span>
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '63%', backgroundColor: '#f7ab31' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Andrew McBlown</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >11</span
                                    >
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '45%', backgroundColor: '#40a7e8' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Lead Meyer</span
                                    >
                                    <span class="bar-graph-main-data-item-amount">9</span>
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '45%', backgroundColor: '#e8ce40' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Alfred Bing</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >13</span
                                    >
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '30%', backgroundColor: '#818181' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Johan Bond</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >12</span
                                    >
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '52%', backgroundColor: '#f7ab31' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Andrew McBlown</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >11</span
                                    >
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '63%', backgroundColor: '#f7ab31' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Andrew McBlown</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >11</span
                                    >
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '45%', backgroundColor: '#40a7e8' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Lead Meyer</span
                                    >
                                    <span class="bar-graph-main-data-item-amount">9</span>
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '45%', backgroundColor: '#e8ce40' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Alfred Bing</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >13</span
                                    >
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '30%', backgroundColor: '#818181' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Johan Bond</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >12</span
                                    >
                                </div>
                                <div
                                    class="bar-graph-main-data-item"
                                    style={{ width: '52%', backgroundColor: '#f7ab31' }}
                                >
                                    <span class="bar-graph-main-data-item-label"
                                    >Andrew McBlown</span
                                    >
                                    <span class="bar-graph-main-data-item-amount"
                                    >11</span
                                    >
                                </div>
                            </div>

                            <div class="bar-graph-back">
                                <div class="bar-graph-back-x">
                                    <div class="bar-graph-back-x-line"></div>
                                    <div class="bar-graph-back-x-line"></div>
                                    <div class="bar-graph-back-x-line"></div>
                                    <div class="bar-graph-back-x-line"></div>
                                    <div class="bar-graph-back-x-line"></div>
                                </div>
                            </div>

                            <div class="bar-graph-x-axis">
                                <p class="bar-graph-x-axis-item">Bad (1.0)</p>
                                <p class="bar-graph-x-axis-item">Weak (2.0)</p>
                                <p class="bar-graph-x-axis-item">Ok (3.0)</p>
                                <p class="bar-graph-x-axis-item">Good (4.0)</p>
                                <p class="bar-graph-x-axis-item">Great (5.0)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BarGraph
