import { useState } from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem";
import Modal from "components/Modal";

const ImageGallery = ({ hits }) => {
    const [showModal, setshowModal] = useState(false);
    const [imageTags, setImageTags] = useState(null);
    const [imageLarge, setImageLarge] = useState(null);

    const handleShowModal = () => {
        setshowModal(!showModal);
    };

    const handleImageShow = (imageTags, imageLarge) => {
        setImageTags(imageTags);
        setImageLarge(imageLarge);
    };

    return (
        <>
            <ul className="ImageGallery">
                <ImageGalleryItem hits={hits} onShowModal={handleShowModal} handleImageShow={handleImageShow} />
            </ul>
            {showModal && <Modal onClose={handleShowModal}><img src={imageLarge} alt={imageTags} /></Modal>}
        </>
    )
};

ImageGallery.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;