import Container from "react-bootstrap/Container";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const HomeProducts = () => {
  return (
    <>
      <Container id="homecontainer" fluid>
        <div id="head">
            <h4>Products Dashboard &nbsp; 
                <FontAwesomeIcon id="cheveron" icon={faChevronRight} />&nbsp;
                    Dashboard&nbsp;<FontAwesomeIcon icon={faHouse} /> &nbsp; 
                <FontAwesomeIcon id="cheveron" icon={faChevronRight} />&nbsp; 
                Home 
            </h4>
        </div>
        <div className="homecontent">
          <div id="homecontent-h1">
            <div id="users">
                <p>Total Users</p> 
                <h1>510</h1> 
                <br />
                <p><span>+95%</span> Last Month</p>
            </div>
            <div id="orders">
                <p>Total Orders</p> 
                <h1>482</h1> 
                <br />
                <p><span>+30%</span> Last Month</p>
            </div>       
          </div>
          <div id="homecontent-h2">
            <div id="homecontent-h2-main">
                <h3>Total Sales</h3> <br />
                <h1>$3,787,681.00 <span>40.63% <FontAwesomeIcon icon={faArrowTrendUp} /> </span></h1> <br /><br /> <br /><br /> <br /><br /><br />
                <p>$3,578.90 in last month</p>
            </div>
          </div>
        </div>

        <div id="homecontent-h3">
            <div id="products">
                    <p>Total Products</p> 
                    <h1>320</h1> 
                    <br />
                    <p><span>+25%</span> Last Month</p>
            </div> <br /> <br />
            <div id="reviews">
                <p>Total Reviews</p> 
                <h1>159</h1> 
                <br />
                <p><span>+45%</span> Last Month</p>
            </div>
          
        </div>
      </Container>
    </>
  );
};

export default HomeProducts;
