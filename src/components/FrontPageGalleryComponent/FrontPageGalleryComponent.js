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
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G1.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G1.jpg?raw=true",
            thumbnailWidth: 300,
            thumbnailHeight: 320,
            caption: "G1"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G2.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G2.jpg?raw=true",
            thumbnailWidth: 280,
            thumbnailHeight: 280,
            caption: "G2"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G3.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G3.jpg?raw=true",
            thumbnailWidth: 140,
            thumbnailHeight: 148,
            caption: "G3"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G4.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G4.jpg?raw=true",
            thumbnailWidth: 180,
            thumbnailHeight: 213,
            isSelected: true,
            caption: "G4"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G5.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G5.jpg?raw=true",
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: "G5"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G6.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G6.jpg?raw=true",
            thumbnailWidth: 320,
            thumbnailHeight: 113,
            isSelected: true,
            caption: "G6"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G7.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G7.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G7"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G8.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G8.jpg?raw=true",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            isSelected: true,
            caption: "G8"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G9.png?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G9.png?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G9"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G10.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G10.jpg?raw=true",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            isSelected: true,
            caption: "G10"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G11.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G11.jpg?raw=true",
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: "G11"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G12.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G12.jpg?raw=true",
            thumbnailWidth: 120,
            thumbnailHeight: 113,
            isSelected: true,
            caption: "G12"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G13.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G13.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G13"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G14.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G14.jpg?raw=true",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            isSelected: true,
            caption: "G14"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G15.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G15.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G15"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G16.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G16.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G16"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G17.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G17.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G17"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G18.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G18.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G18"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G19.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G19.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G19"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G20.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G20.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G20"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G21.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G21.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G21"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G22.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G22.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G22"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G23.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G23.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G23"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G24.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G24.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G24"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G25.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G25.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G25"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G26.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G26.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G26"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G27.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G27.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G27"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G28.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G28.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G28"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G29.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G29.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G29"
        },
        {
            src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G30.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G30.jpg?raw=true",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "G30"
        },
    ])
};

export default Demo1;

// ReactDOM.render(<Demo0 />, document.getElementById('demo0'));