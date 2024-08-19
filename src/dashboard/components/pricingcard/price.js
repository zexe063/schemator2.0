import "./price.css"

function  Price(){
    return(
        <div className=" card2">
        <div className="header">
          <p>Pricing</p>
          <div>Plan For Unlock More Schema features</div>
        </div>
        <div className="card_patelets">
          <div className="card" style={{boxShadow: '25,25px, 50px, -12px  rgba(0, 0, 0 , 0.25)'}}>
            <div className="card_header">
              <p className="basic">Basic</p>
              <p className="meta">This is For Student Checkout</p>
            </div>
            <div className="price">
              <span className="dollor">₹399</span>
              <span className="month">/month</span>
            </div>
            <div className=" button">
              <div><span>Buy Plan</span></div>
            </div>
            <div className="advantages">
              <div className="child">
                <i className="bx bx-check" /><span>5 Files</span>
              </div>
              <div className="child"><i className="bx bx-check" /><span>Only Mongoose Schema</span></div>
              <div className="child"><i className="bx bx-check" /><span>Screensharing-Available</span></div>
              <div className="child"><i className="bx bx-check" /><span>Unlimited Team Member</span></div>
            </div>
          </div>
          <div className="card" style={{backgroundColor: '#111827'}}>
            <div className="card_header">
              <p className="basic" style={{color: 'white'}}>Developer</p>
              <p className="meta">It save your  time and faster your schema code</p>
            </div>
            <div className="price">
              <span className="dollor" style={{color: 'white'}}>₹799</span>
              <span className="month">/month</span>
            </div>
            <div className=" button">
              <div><span>Buy Plan</span></div>
            </div>
            <div className="advantages">
              <div className="child">
                <i className="bx bx-check" /><span style={{color: 'white'}}>Unlimites Files</span>
              </div>
              <div className="child"><i className="bx bx-check" /><span style={{color: 'white'}}>Only Mongoose Schema</span></div>
              <div className="child"><i className="bx bx-check" /><span style={{color: 'white'}}>Screensharing-Available</span></div>
              <div className="child"><i className="bx bx-check" /><span style={{color: 'white'}}>Unlimited Team Member</span></div>
              <div className="child"><i className="bx bx-check" /><span style={{color: 'white'}}>Acess All Schema Designer</span></div>
              <div className="child"><i className="bx bx-check" /><span style={{color: 'white'}}>Direct Contact team</span></div>
            </div>
          </div>
          <div className="card">
            <div className="card_header">
              <p className="basic">Custom</p>
              <p className="meta">This is For Student Checkout</p>
            </div>
            <div className="price">
              
            </div>
            <div className=" button">
              <div><span>Buy Plan</span></div>
            </div>
            <div className="advantages">
              <div className="child">
                <i className="bx bx-check" /><span>Unlimites Files</span>
              </div>
              <div className="child"><i className="bx bx-check" /><span>Only Mongoose Schema</span></div>
              <div className="child"><i className="bx bx-check" /><span>Screensharing-Available</span></div>
              <div className="child"><i className="bx bx-check" /><span>Unlimited Team Member</span></div>
              <div className="child"><i className="bx bx-check" /><span>Acess All Er desinger</span></div>
              <div className="child"><i className="bx bx-check" /><span>Ai Beta Acess</span></div>
              <div className="child"><i className="bx bx-check" /><span>Direct Contact team</span></div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Price;