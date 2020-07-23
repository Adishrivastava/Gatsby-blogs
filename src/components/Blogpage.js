import React, { useContext } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import Blogcontext from '../context/Blogpage/Blogcontext';
import Cards from './Cards';

export default function Blogpage() {
	const context = useContext(Blogcontext);
	const { blogTitle, SubHead, details, img } = context;
	return (
		<div id="Blogpage">
			<Navbar />
			<div className="container" id="blog-content">
				<h4>{SubHead}</h4>
				<h1>{blogTitle}</h1>
				<img src={img} alt="" />
				<p>{details}</p>
			</div>
			<h3
				style={{
					textAlign: 'center',
					fontWeight: 'Bold',
					marginBottom: '20px',
					marginTop: '40px',
				}}
			>
				Recent Blogs
			</h3>
			<div className="cards-cont">
				{[0, 1, 2, 3].map((i) => (
					<Cards
						key={i}
						img="./images/img1.jpg"
						subHead="this is the subHeading"
						Title="Title of the Blog"
					/>
				))}
			</div>
			<Footer />
		</div>
	);
}
