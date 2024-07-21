import React from 'react';
import { Link } from 'react-router-dom';
import fimg1 from './fimg1.png';
import fimg2 from './fimg2.png';
import fimg3 from './fimg3.png';
import fimg4 from './fimg4.png';
import fimg5 from './fimg5.png';
import fimg6 from './fimg6.png';
import fimg7 from './fimg7.png';

import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';

import news1 from './news1.jpg';
import news2 from './news2.jpg';
import news3 from './news3.jpg';

import story1 from './story1.png';
import story2 from './story2.png';
import story3 from './story3.png';
import story4 from './story4.png';
import story5 from './story5.webp';
import story6 from './story6.png';


function Home(){
    return(
        <>
            <style>
                {`
                * {
            margin: 0;
            padding: 0;
        }

        body,
        h1,
        h2,
        p {
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
        }

        .btn-container {
            display: flex;
        }

        .btn {
            background-color: #f00;
            color: #fff;
            padding: 10px 20px;
            margin-left: 10px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }

        .btn:hover {
            background-color: #c00;
        }

        .container {
            max-width: 100%;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .news-heading {
            text-align: center;
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
            width: 100%;
        }

        .news-description {
            text-align: center;
            font-size: 18px;
            color: #555;
            margin-bottom: 30px;
            width: 100%;
        }

        .card {
            width: calc(33.33% - 20px);
            margin-bottom: 20px;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            height: 100%;
            transition: transform 0.3s ease-in-out;
        }

        .card:hover {
            transform: scale(1.1);
        }

        .card-content {
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.7);
            flex-grow: 1;
        }

        .card-category {
            font-weight: bold;
            color: #333;
        }

        .card-description {
            color: #555;
            margin-top: 10px;
        }
        
        .card.card1 {
            background-image: url('${card1}');
            background-size: cover;
            background-position: center;
            height: 200px;
            /* Adjust the height as needed */
        }

        .card.card2 {
            background-image: url('${card2}');
            background-size: cover;
            background-position: center;
            height: 200px;
            /* Adjust the height as needed */
        }

        .card.card3 {
            background-image: url('${card3}');
            background-size: cover;
            background-position: center;
            height: 200px;
            /* Adjust the height as needed */
        }

        .top-stories {
            width: 45%;
            /* Adjust the width of the Top Stories section */
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 60px;
        }

        .top-stories-heading {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .top-story-card {
            width: 100%;
            height: 100px;
            margin-bottom: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: row;
            /* Display content in a row */
            transition: transform 0.3s ease-in-out;
            /* Transition for animation */
        }

        .top-story-card:hover {
            transform: scale(1.07);
            /* Scale up the card on hover */
        }

        .top-story-image1 {
            width: 40%;
            /* Set the width for the image */
            background-image: url('${story1}');
            background-size: cover;
            background-position: center;
        }
        .top-story-image2 {
            width: 40%;
            /* Set the width for the image */
            background-image: url('${story2}');
            background-size: cover;
            background-position: center;
        }
        .top-story-image3 {
            width: 40%;
            background-image: url('${story3}');
            background-size: cover;
            background-position: center;
        }
        .top-story-image4 {
            width: 40%;
            background-image: url('${story4}');
            background-size: cover;
            background-position: center;
        }
        .top-story-image5 {
            width: 40%;
            background-image: url('${story5}');
            background-size: cover;
            background-position: center;
        }
        .top-story-image6 {
            width: 40%;
            background-image: url('${story6}');
            background-size: cover;
            background-position: center;
        }

        .top-story-content {
            width: 60%;
            padding: 10px;
            display: flex;
            flex-direction: column;
        }

        .top-story-heading {
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }

        .top-story-description {
            color: #555;
        }

        .top-news {
            margin-top: 60px;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .top-news-heading {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .top-news-card {
            width: 100%;
            height: 200px;
            margin-bottom: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: row;
            transition: transform 0.3s ease-in-out;
        }

        .top-news-card:hover {
            transform: scale(1.07);
        }

        .top-news-image1 {
            width: 40%;
            background-image: url('${news1}');
            background-size: cover;
            background-position: center;
        }
        .top-news-image2 {
            width: 40%;
            background-image: url('${news2}');
            background-size: cover;
            background-position: center;
        }
        .top-news-image3 {
            width: 40%;
            background-image: url('${news3}');
            background-size: cover;
            background-position: center;
        }

        .top-news-content {
            width: 60%;
            padding: 10px;
            display: flex;
            flex-direction: column;
        }

        .top-news-heading {
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }

        .top-news-description {
            color: #555;
        }

        .see-all-link {
            color: black;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
            font-size: medium;
        }

        .see-all-link:hover {
            color: rgb(21, 0, 128);
            text-decoration: underline;
        }

        footer {
            background-color: #333;
            color: #fff;
            padding: 20px 0;
            text-align: center;
            transition: background-color 0.3s ease-in-out;
        }
        
        .footer-logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
            transition: color 0.3s ease-in-out;
        }
        
        .footer-sections {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .footer-section {
            flex: 1;
            padding: 10px;
            text-align: left;
        }
        
        .contact-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 16px;
        }
        
        .contact-table td {
            padding: 10px 0;
        }
        
        .about-us-text {
            font-size: 16px;
            text-align: left;
        }
        
        .footer-copyright {
            font-size: 20px;
            margin-top: 20px;
            transition: color 0.3s ease-in-out;
        }
        
        footer:hover {
            background-color: #222; 
        }
        
        .footer-logo:hover {
            color: #ff5722; 
        }
        
        .footer-copyright:hover {
            color: #ff5722; 
        }
        


.continuous-images {
    text-align: center;
    margin-top: 20px;
    overflow: hidden; 
    margin-bottom: 50px;
}

.continuous-images h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.image-container {
    white-space: nowrap; 
    animation: scrollImages 20s linear infinite;
    height: auto;
}

.image-item {
    display: inline-block; 
    width: 250px; 
    text-align: center;
    margin-right: 20px; 
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    height: 200px;
    
}

.image-item img {
    max-width: 100%;
    height: 150px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.image-item p {
    padding: 10px;
    background-color: #fff;
    font-weight: bold;
    color: #333;
    margin: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.image-item:hover {
    transform: scale(1.05);
}


@keyframes scrollImages {
    0% {
        transform: translateX(5%); /* Start from */
    }
    100% {
        transform: translateX(calc(-30% - 20px)); /* End at */
    }
}
`}
            </style>
        
    <header>
        <div className="logo">NewsMonkey</div>
        <div className="btn-container">
     <Link className="btn" to="/login" style={{ textDecoration: 'none', color: '#ddd' }}>Login</Link>
     <Link className='btn' to="/registration" style={{ textDecoration: 'none', color: '#ddd' }}>Register</Link>

        </div>
    </header>
    <div className="container">
        <div className="news-heading">Live Top News</div>
        <div className="news-description">Stay updated with the latest news from around the world.</div>
        
        <div className="card card1">
            <div className="card-content">
                <div className="card-category">press trust of india</div>
                <p className="card-description">Gold Price Fall To This Mont's Lowest, Why Is It Happening</p>
            </div>
        </div>
       
        <div className="card card2">
            <div className="card-content">
                <div className="card-category">the times of india</div>
                <p className="card-description">China is no longer america's biggest trading partner</p>
            </div>
        </div>
      
        <div className="card card3">
            <div className="card-content">
                <div className="card-category">Business Today</div>
                <p className="card-description">Balrampur Chini,Bajaj Hind,Shree Renuka:Sugar stocks rally up to 44% in 1 month;</p>
            </div>
        </div>
      
        <div className="top-stories">
            <div className="top-stories-heading">Top Stories <Link to="/login" className="see-all-link">See All &gt;&gt;&gt;</Link></div>
           
            <div className="top-story-card">
                <div className="top-story-image1"></div>
                <div className="top-story-content">
                    <div className="top-story-heading">Honor 90 launched in India: 3 reasons to buy, 2 to skip</div>
                    <p className="top-story-description">Honor 90 has launched in India at an introductory starting price of Rs 27,999. Is it worth buying?</p>
                </div>
            </div>
           
            <div className="top-story-card">
                <div className="top-story-image2"></div>
                <div className="top-story-content">
                    <div className="top-story-heading">Dunith Wellalage’s rise to prominence: From Sri Lanka U19 captain to dependable national all-rounder</div>
                    <p className="top-story-description">Dunith Wellalage made a mark for himself when he became the top run-scorer and the leading wicket-taker in the U19 World Cup last year in the West Indies. Last year, he donned</p>
                </div>
            </div>

            <div className="top-story-card">
                <div className="top-story-image3"></div>
                <div className="top-story-content">
                    <div className="top-story-heading">UP man kills father for assaulting mother, later murders grandfather too
                    </div>
                    <p className="top-story-description">According to the police, the accused was allegedly disturbed by the debauchery and bad behaviour of his father towards his mother, due to which he hacked his father. He also killed his grandfather who was sleeping nearby.
                    </p>
                </div>
            </div>

            <div className="top-story-card">
                <div className="top-story-image4"></div>
                <div className="top-story-content">
                    <div className="top-story-heading">UP man beats wife after she says raped by father-in-law, case filed</div>
                    <p className="top-story-description">The woman's husband allegedly beat her after she told him about being raped by her father-in-law. A case has been registered against the woman's husband and father-in-law.</p>
                </div>
            </div>

            <div className="top-story-card">
                <div className="top-story-image5"></div>
                <div className="top-story-content">
                    <div className="top-story-heading">JNU student raped by man on pretext of marriage in Delhi, probe on</div>
                    <p className="top-story-description">A student of the Jawaharlal Nehru University (JNU) was allegedly raped by a man on the pretext of marriage in north Delhi's Wazirabad area, police said on Thursday.</p>
                </div>
            </div>

            <div className="top-story-card">
                <div className="top-story-image6"></div>
                <div className="top-story-content">
                    <div className="top-story-heading">16-year-old student gang-raped in UP’s Saharanpur, 5 arrested</div>
                    <p className="top-story-description">Police have arrested five men for raping a 16-year-old student in Uttar Pradesh's Saharanpur.</p>
                </div>
            </div>
           
        </div>
   
        <div className="top-news">
            <div className="top-news-heading">Top News <Link to="/login" className="see-all-link">See All &gt;&gt;&gt;</Link></div>
        
            <div className="top-news-card">
                <div className="top-news-image1"></div>
                <div className="top-news-content">
                    <div className="top-news-heading">Chandrayaan-3</div>
                    <p className="top-news-description">Chandrayaan-3 landing site 'Shiv Shakti' clicked by South Korea's Danuri lunar orbiter</p>
                </div>
            </div>
          
            <div className="top-news-card">
                <div className="top-news-image2"></div>
                <div className="top-news-content">
                    <div className="top-news-heading">Aditya L1</div>
                    <p className="top-news-description">Aditya L1 set to move into higher orbit as it maneuvers around Earth</p>
                </div>
            </div>

            <div className="top-news-card">
                <div className="top-news-image3"></div>
                <div className="top-news-content">
                    <div className="top-news-heading">G20, India</div>
                    <p className="top-news-description">World has sidelined us': Pakistanis react to India's G20 Summit, visit by 'Shehzada of Saudi Arabia'</p>
                </div>
            </div>

            
           
        </div>
       
        <div className="continuous-images">
            <h2>Featured Images</h2>
            <div className="image-container">
               
                <div className="image-item">
                    <img src={`${fimg1}`} alt="Image1"/>
                    <p>iPhone 15: List of countries<br/> that are offering new <br/>iPhones at lowest prices</p>
                </div>
                <div className="image-item">
                    <img src={`${fimg2}`} alt="Image2"/>
                    <p>Explained: What happens if <br/>diesel vehicles become <br/>costlier in India </p>
                </div>
                <div className="image-item">
                    <img src={`${fimg3}`} alt="Image2"/>
                    <p>Gold, silver price today,<br/> September 14, 2023: <br/>metals witness dip on MCX</p>
                </div>
                <div className="image-item">
                    <img src={`${fimg4}`} alt="Image2"/>
                    <p>Bombay Dyeing shares <br/>surge nearly 20% in early <br/>trade. Here’s why</p>
                </div>
                <div className="image-item">
                    <img src={`${fimg5}`} alt="Image2"/>
                    <p>Adani Group | Weathering<br/> a second storm <br/> .</p>
                </div>
                <div className="image-item">
                    <img src={`${fimg6}`} alt="Image2"/>
                    <p>With eye on Iran, <br/>US signs new security <br/>agreement with Bahrain</p>
                </div>
                <div className="image-item">
                    <img src={`${fimg7}`} alt="Image2"/>
                    <p>Second Republican primary <br/>debate: is it, candidates<br/> list,what to expect</p>
                </div>
            </div>
        </div>

    </div>
    <footer>
            <div className="footer-logo">
                <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/286826/large_newsmonkeys.png" width="200" alt="logo" />
            </div>
            <div className="footer-sections">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <table className="contact-table">
                        <tbody>
                            <tr>
                                <td>Phone:</td>
                                <td>+1 (123) 456-7890</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>contact@newsmonkey.com</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>123 News Street, City</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p className="about-us-text">We are NewsMonkey, your source for the latest news from around the world. Our website features a wide range of news categories to keep you informed.</p>
                </div>
            </div>
            <div className="footer-copyright">&copy; 2023 News Website</div>
        </footer>


        </>
    );
}

export default Home;