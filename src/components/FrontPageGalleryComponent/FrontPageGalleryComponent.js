import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery.js';


class Demo1 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

        this.onSelectImage = this.onSelectImage.bind(this);

    }

    onSelectImage (index, image) {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });
    }

    render () {
        return (
            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"}}>
                <Gallery
                    images={this.state.images}
                    onSelectImage={this.onSelectImage}
                    lightboxWidth={1536}
                />
            </div>
        );
    }
}

Demo1.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};
function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
Demo1.defaultProps = {
    images: shuffleArray([
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G1.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G1.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 320,
            caption: "G1"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G2.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G2.jpg",
            thumbnailWidth: 280,
            thumbnailHeight: 280,
            caption: "G2"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G3.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G3.jpg",
            thumbnailWidth: 140,
            thumbnailHeight: 148,
            caption: "G3"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G4.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G4.jpg",
            thumbnailWidth: 180,
            thumbnailHeight: 213,
            isSelected: true,
            caption: "G4"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G5.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G5.jpg",
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: "G5"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G6.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G6.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 113,
            isSelected: true,
            caption: "G6"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G7.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G7.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G7"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G8.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G8.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            isSelected: true,
            caption: "G8"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G9.png",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G9.png",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G9"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G10.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G10.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            isSelected: true,
            caption: "G10"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G11.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G11.jpg",
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: "G11"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G12.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G12.jpg",
            thumbnailWidth: 120,
            thumbnailHeight: 113,
            isSelected: true,
            caption: "G12"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G13.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G13.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G13"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G14.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G14.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            isSelected: true,
            caption: "G14"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G15.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G15.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G15"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G16.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G16.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G16"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G17.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G17.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G17"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G18.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G18.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G18"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G19.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G19.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G19"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G20.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G20.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G20"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G21.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G21.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G21"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G22.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G22.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G22"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G23.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G23.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G23"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G24.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G24.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G24"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G25.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G25.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G25"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G26.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G26.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G26"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G27.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G27.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G27"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G28.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G28.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G28"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G29.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G29.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G29"
        },
        {
            src: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G30.jpg",
            thumbnail: "https://raw.githubusercontent.com/JIshanRandika/MyProfile2/master/public/images/Gallery/G30.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G30"
        },
    ])
};

export default Demo1;

// ReactDOM.render(<Demo0 />, document.getElementById('demo0'));