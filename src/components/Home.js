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

        /* Reset some default styles */
        body,
        h1,
        h2,
        p {
            margin: 0;
            padding: 0;
        }

        /* Header Styles */
        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        /* Logo Styles */
        .logo {
            font-size: 24px;
            font-weight: bold;
        }

        /* Login and Registration Button Styles */
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

        /* Main Content Styles */
        .container {
            max-width: 100%;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        /* News Heading Styles */
        .news-heading {
            text-align: center;
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
            width: 100%;
        }

        /* News Description Styles */
        .news-description {
            text-align: center;
            font-size: 18px;
            color: #555;
            margin-bottom: 30px;
            width: 100%;
        }

        /* Card Styles */
        .card {
            width: calc(33.33% - 20px);
            margin-bottom: 20px;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            height: 100%;
            /* Constrain card height */
            transition: transform 0.3s ease-in-out;
            /* Transition for animation */
        }

        .card:hover {
            transform: scale(1.1);
            /* Scale up the card on hover */
        }

        .card-content {
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.7);
            /* Card content background color */
            flex-grow: 1;
            /* Allow content to grow and occupy remaining space */
        }

        .card-category {
            font-weight: bold;
            color: #333;
        }

        .card-description {
            color: #555;
            margin-top: 10px;
        }
        
        /* Background Images for Cards */
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

        /* Top Stories Section Styles */
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
            /* Set the width for the image */
            background-image: url('${story3}');
            background-size: cover;
            background-position: center;
        }
        .top-story-image4 {
            width: 40%;
            /* Set the width for the image */
            background-image: url('${story4}');
            background-size: cover;
            background-position: center;
        }
        .top-story-image5 {
            width: 40%;
            /* Set the width for the image */
            background-image: url('${story5}');
            background-size: cover;
            background-position: center;
        }
        .top-story-image6 {
            width: 40%;
            /* Set the width for the image */
            background-image: url('${story6}');
            background-size: cover;
            background-position: center;
        }

        .top-story-content {
            width: 60%;
            /* Set the width for the content */
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

        /* Top News Section Styles */
        .top-news {
            margin-top: 60px;
            width: 50%;
            /* height: px; */
            /* Adjust the width of the Top Stories section */
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
            /* Display content in a row */
            transition: transform 0.3s ease-in-out;
            /* Transition for animation */
        }

        .top-news-card:hover {
            transform: scale(1.07);
            /* Scale up the card on hover */
        }

        .top-news-image1 {
            width: 40%;
            /* Set the width for the image */
            background-image: url('${news1}');
            background-size: cover;
            background-position: center;
        }
        .top-news-image2 {
            width: 40%;
            /* Set the width for the image */
            background-image: url('${news2}');
            background-size: cover;
            background-position: center;
        }
        .top-news-image3 {
            width: 40%;
            /* Set the width for the image */
            background-image: url('${news3}');
            background-size: cover;
            background-position: center;
        }

        .top-news-content {
            width: 60%;
            /* Set the width for the content */
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

        /* "See All" Link Styles */
        .see-all-link {
            color: black;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
            font-size: medium;
        }

        .see-all-link:hover {
            color: rgb(21, 0, 128);
            /* Change color on hover */
            text-decoration: underline;
        }

        /* Footer Styles */
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        /* Add this CSS to your existing styles */

/* Continuous Images Section Styles */
.continuous-images {
    text-align: center;
    margin-top: 20px;
    overflow: hidden; /* Hide overflow for the continuous scroll effect */
    margin-bottom: 50px;
}

.continuous-images h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.image-container {
    white-space: nowrap; /* Keep images in a single line */
    animation: scrollImages 20s linear infinite; /* Define the animation for continuous scrolling */
    height: auto;
}

.image-item {
    display: inline-block; /* Display images in a single line */
    width: 250px; /* Adjust the width of each image container as needed */
    text-align: center;
    margin-right: 20px; /* Adjust the spacing between images */
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

/* Apply hover effect to image items */
.image-item:hover {
    transform: scale(1.05);
}

/* Keyframes animation for continuous scrolling */
/* Updated Keyframes animation for continuous scrolling */
@keyframes scrollImages {
    0% {
        transform: translateX(5%); /* Start from the center */
    }
    100% {
        transform: translateX(calc(-30% - 20px)); /* End at the center with spacing */
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
            <div className="top-stories-heading">Top Stories <a href="/" className="see-all-link">See All &gt;&gt;&gt;</a></div>
           
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
            <div className="top-news-heading">Top News <a href="/" className="see-all-link">See All &gt;&gt;&gt;</a></div>
        
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
        &copy; 2023 News Website
    </footer>


        </>
    );
}

export default Home;