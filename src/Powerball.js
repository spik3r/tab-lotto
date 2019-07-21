import React from 'react';
import './Powerball.css';

import {faBolt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const axios = require('axios');

class Powerball extends React.Component {

    render() {
        return <div className="powerball-container">
            <div className="left">
                <div className="top">
                    <div data-lotto-highlight="0" className="lotto-num"></div>
                    <div data-lotto-highlight="1" className="lotto-num"></div>
                    <div data-lotto-highlight="2" className="lotto-num"></div>
                    <div data-lotto-highlight="3" className="lotto-num"></div>
                    <div data-lotto-highlight="4" className="lotto-num"></div>
                    <div data-lotto-highlight="5" className="lotto-num"></div>
                    <div data-lotto-highlight="6" className="lotto-num"></div>
                    <div data-pb-highlight="0" className="lotto-num pb">PB</div>
                </div>
                <div className="middle">
                    <div className="row">
                        <div data-lotto-num="1" className="col">1</div>
                        <div data-lotto-num="2" className="col">2</div>
                        <div data-lotto-num="3" className="col">3</div>
                        <div data-lotto-num="4" className="col">4</div>
                        <div data-lotto-num="5" className="col">5</div>
                        <div data-lotto-num="6" className="col">6</div>
                        <div data-lotto-num="7" className="col">7</div>
                        <div data-lotto-num="8" className="col">8</div>
                        <div data-lotto-num="9" className="col">9</div>
                        <div data-lotto-num="10" className="col">10</div>
                    </div>
                    <div className="row">
                        <div data-lotto-num="11" className="col">11</div>
                        <div data-lotto-num="12" className="col">12</div>
                        <div data-lotto-num="13" className="col">13</div>
                        <div data-lotto-num="14" className="col">14</div>
                        <div data-lotto-num="15" className="col">15</div>
                        <div data-lotto-num="16" className="col">16</div>
                        <div data-lotto-num="17" className="col">17</div>
                        <div data-lotto-num="18" className="col">18</div>
                        <div data-lotto-num="19" className="col">19</div>
                        <div data-lotto-num="20" className="col">20</div>
                    </div>
                    <div className="row">
                        <div data-lotto-num="21" className="col">21</div>
                        <div data-lotto-num="22" className="col">22</div>
                        <div data-lotto-num="23" className="col">23</div>
                        <div data-lotto-num="24" className="col">24</div>
                        <div data-lotto-num="25" className="col">25</div>
                        <div data-lotto-num="26" className="col">26</div>
                        <div data-lotto-num="27" className="col">27</div>
                        <div data-lotto-num="28" className="col">28</div>
                        <div data-lotto-num="29" className="col">29</div>
                        <div data-lotto-num="30" className="col">30</div>
                    </div>
                    <div className="row">
                        <div data-lotto-num="31" className="col">31</div>
                        <div data-lotto-num="32" className="col">32</div>
                        <div data-lotto-num="33" className="col">33</div>
                        <div data-lotto-num="34" className="col">34</div>
                        <div data-lotto-num="35" className="col">35</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="select-pb-text">SELECT YOUR POWERBALL</div>
                    <div className="row">
                        <div data-pb-num="1" className="col">1</div>
                        <div data-pb-num="2" className="col">2</div>
                        <div data-pb-num="3" className="col">3</div>
                        <div data-pb-num="4" className="col">4</div>
                        <div data-pb-num="5" className="col">5</div>
                        <div data-pb-num="6" className="col">6</div>
                        <div data-pb-num="7" className="col">7</div>
                        <div data-pb-num="8" className="col">8</div>
                        <div data-pb-num="9" className="col">9</div>
                        <div data-pb-num="10" className="col">10</div>
                    </div>
                    <div className="row">
                        <div data-pb-num="11" className="col">11</div>
                        <div data-pb-num="12" className="col">12</div>
                        <div data-pb-num="13" className="col">13</div>
                        <div data-pb-num="14" className="col">14</div>
                        <div data-pb-num="15" className="col">15</div>
                        <div data-pb-num="16" className="col">16</div>
                        <div data-pb-num="17" className="col">17</div>
                        <div data-pb-num="18" className="col">18</div>
                        <div data-pb-num="19" className="col">19</div>
                        <div data-pb-num="20" className="col">20</div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="actions">
                    <div className="icon fill" onClick={fillClickHandler}>
                        <FontAwesomeIcon icon={faBolt}/>
                    </div>
                    <div className="icon delete" onClick={deleteClickHandler}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </div>
                </div>
            </div>


        </div>
    };
}

const doPost = async () => {
    return axios.post('https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults', {
        CompanyId: 'GoldenCasket',
        MaxDrawCountPerProduct: '1',
        OptionalProductFilter: ["Powerball"]
    })
        .then(function (response) {
            // console.log(response);
            console.log(response.data.DrawResults[0].PrimaryNumbers);
            console.log(response.data.DrawResults[0].SecondaryNumbers);
            return {
                primary: response.data.DrawResults[0].PrimaryNumbers,
                secondary: response.data.DrawResults[0].SecondaryNumbers
            };
        })
        .catch(function (error) {
            console.log(error);
        });
};

const fillClickHandler = async () => {
    console.log("fillClickHandler called");
    const result = await doPost();
    console.log("lotto nums: " + result.primary);
    console.log("powerball num: " + result.secondary);

    result.primary.map((num, index) => {
        const highlighted = document.querySelector(`.lotto-num[data-lotto-highlight="${index}"]`);
        console.log("index: " + result.primary[index]);
        console.log("highlighted: " + highlighted);
        highlighted.innerHTML = `${result.primary[index]}`;
        highlighted.classList.add("filled");

        const selected = document.querySelector(`.col[data-lotto-num="${result.primary[index]}"]`);
        selected.classList.add("selected");
        selected.classList.add("cross");
    });

    const powerballDiv = document.querySelector(`.col[data-pb-num="${result.secondary}"]`);
    powerballDiv.classList.add("selected");
    powerballDiv.classList.add("cross");
    const powerballHighlight = document.querySelector(`.lotto-num[data-pb-highlight="${0}"]`);
    powerballHighlight.innerHTML = `${result.secondary}`;
    powerballHighlight.classList.add("filled-pb")

};


const deleteClickHandler = () => {
    console.log("deleteClickHandler called");
    document.location.reload();
};

export default Powerball;