import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

const Home = () => {
    const card1Data = {
        imageSource: "https://source.unsplash.com/random/500x325",
        title: "Terminator",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, aperiam sunt. Labore, esse architecto vero, maiores distinctio, ratione placeat dolorum dolorem at laboriosam nobis beatae deleniti animi? Fugiat, temporibus. Molestias?",
        url: "https://example.com/card1"
    };

    const card2Data = {
		imageSource: "https://picsum.photos/500/325",
        title: "Godzilla",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, aperiam sunt. Labore, esse architecto vero, maiores distinctio, ratione placeat dolorum dolorem at laboriosam nobis beatae deleniti animi? Fugiat, temporibus. Molestias?" ,
        url: "https://example.com/card2"
    };

    const card3Data = {
        imageSource: "https://loremflickr.com/500/325",
        title: "Manolito",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, aperiam sunt. Labore, esse architecto vero, maiores distinctio, ratione placeat dolorum dolorem at laboriosam nobis beatae deleniti animi? Fugiat, temporibus. Molestias?" ,
        url: "https://example.com/card3"
    };
	const card4Data = {
        imageSource: "https://picsum.photos/seed/picsum/500/325",
        title: "Chikistrikis",
text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, aperiam sunt. Labore, esse architecto vero, maiores distinctio, ratione placeat dolorum dolorem at laboriosam nobis beatae deleniti animi? Fugiat, temporibus. Molestias?" ,                                                 
        url: "https://example.com/card4"
	};

    return (
        <div className="text-center">
            <Navbar />
            <Jumbotron />
            <div className="row">
                {/* Pasar los datos como props a cada componente <Card /> */}
                <div className="col-md-3">
                    <Card {...card1Data} />
                </div>
                <div className="col-md-3">
                    <Card {...card2Data} />
                </div>
                <div className="col-md-3">
                    <Card {...card3Data} />
                </div>
				<div className="col-md-3">
                    <Card {...card4Data} />
                </div>
               
            </div>
            <div className="hola3">
    Todos los derechos reservados. Este contenido está protegido por las leyes de derechos de autor. Queda estrictamente prohibida la reproducción, distribución, modificación o cualquier otro uso sin el permiso expreso del titular de los derechos de autor. "RuperthL"
    </div>

            </div>
            
    );
};



export default Home;
