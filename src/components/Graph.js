import React, {Component} from 'react';

const GraphStyle = {
    backgroundColor: "#aec3d9",
    boxShadow: "inset 0 0 6px"
}

class Graph extends Component {
    render() {
        return (
            <div>
                <svg width="300" height="300" style={GraphStyle}>
                    <line className="axis" x1="0" x2="300" y1="150" y2="150" stroke="black"></line>
                    <line x1="150" x2="150" y1="0" y2="300" stroke="black"></line>
                    <polygon points="150,0 144,15 156,15" stroke="black"></polygon>
                    <polygon points="300,150 285,156 285,144" stroke="black"></polygon>

                    <line x1="200" x2="200" y1="155" y2="145" stroke="black"></line>
                    <line x1="250" x2="250" y1="155" y2="145" stroke="black"></line>

                    <line x1="50" x2="50" y1="155" y2="145" stroke="black"></line>
                    <line x1="100" x2="100" y1="155" y2="145" stroke="black"></line>

                    <line x1="145" x2="155" y1="100" y2="100" stroke="black"></line>
                    <line x1="145" x2="155" y1="50" y2="50" stroke="black"></line>

                    <line x1="145" x2="155" y1="200" y2="200" stroke="black"></line>
                    <line x1="145" x2="155" y1="250" y2="250" stroke="black"></line>

                    <text x="195" y="140">R/2</text>
                    <text x="248" y="140">R</text>

                    <text x="40" y="140">-R</text>
                    <text x="90" y="140">-R/2</text>

                    <text x="160" y="105">R/2</text>
                    <text x="160" y="55">R</text>

                    <text x="160" y="205">-R/2</text>
                    <text x="160" y="255">-R</text>

                    <polygon points="150,150 100,150 100,50 150,50"
                             fill="#0a0c18" fill-opacity="0.3" stroke="white"></polygon>

                    <path d="M 150 200 A 50 50 90 0 0 200 150 L 150 150 Z"
                          fill="#0a0c18" fill-opacity="0.3" stroke="white"></path>

                    <polygon points="150,200 50,150 150,150"
                             fill="#0a0c18" fill-opacity="0.3" stroke="white"></polygon>

                    <circle r="3" cx="150" cy="150" id="point" fill="black"></circle>
                </svg>
            </div>
        );
    }
}

export default Graph;