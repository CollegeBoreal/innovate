// import './App.css';
import Head from './Head'
import './App.css'
import tech from './img/tech.png'
import service from './img/service.png'


function App() {
  return (
    <main className="container">
        <Head/>
        <div className="Home-panel">
        
      <table>
           <tr>
              <th  className="Home-section ">
                  <a href="#">
                    <h1>Getting Started with Us</h1>
                    <p>Build Amazing Solution that Support your Bussiness</p>
                    <p>Learn more</p>
                  </a>
              
                  
              </th>
              <th className="Home-image">
            
                  
                    <img src={tech} alt="tech"></img>
                  
              </th>
          </tr>
            
        </table>
        </div>

        <div className="Home-Second-Panel">
          <h4>What industry?</h4>
            <section>
                  <a href="">
                    <img></img>
                    <h3>E-commerce</h3>
                    <p>Achieve purchase of your product easilty</p>
                    <p>Lear more</p>
                  </a>
            </section>
            <section>
                  <a href="">
                    <img></img>
                    <h3>Finance</h3>
                    <p>Achieve purchase of your product easilty</p>
                    <p>Lear more</p>
                  </a>
            </section>
            <section>
            <a href="">
              <img></img>
              <h3>Learning Platform</h3>
              <p>Achieve purchase of your product easilty</p>
              <p>Lear more</p>
            </a>
      </section>
      <section>
      <a href="">
        <img></img>
        <h3>Media & Entertaiment</h3>
        <p>Achieve purchase of your product easilty</p>
        <p>Lear more</p>
      </a>
</section>
        </div>
        <div className="Home-Third-Panel">
          <h1>Complete  Assistance with shopify Setting & development </h1>
            <section>
              <a href="">
                <img></img>
                <h3>Finance</h3>
                <p>Achieve purchase of your product easilty</p>
                <p>Lear more</p>
              </a>
          </section>
          <section>
          <a href="">
            <img></img>
            <h3>Finance</h3>
            <p>Achieve purchase of your product easilty</p>
            <p>Lear more</p>
          </a>
      </section>
      <section>
          <a href="">
            <img></img>
            <h3>Finance</h3>
            <p>Achieve purchase of your product easilty</p>
            <p>Lear more</p>
          </a>
      </section>
        </div>

        <div className="Services">
            <h1>services</h1>
            <table>
            <tr>
               <th  className="Service-image">
                <img src={service } alt="service"></img>
               
                   
               </th>
               <th className="Service-section">
             
                
               <h1>Our Approach</h1>
               <p>Build Amazing Solution that Support your Bussiness</p>
               <p>Learn more</p>
             
                     
                   
               </th>
           </tr>
             
         </table>
        </div>

        <div className="new">
          <h1>Our Solution everywhere</h1>
          <ul>
            <li>Manufacturing</li>
            <li>Finance</li>
            <li>Gaming</li>
            <li>Entertainment</li>
            <li>Onlie Store</li>
          </ul>

          <div className="new-image">
            
          </div>
        </div>
     
    </main>
  );
}

export default App;
