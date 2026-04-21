function PhotoCard({ photo, onDownload, imageUrl }) {
    return (
        <div className="col-3">
            <img
                src={imageUrl}
                alt={photo.alt}
                style={{ margin: "5px", borderRadius: "10px" }}
                width="100%"
            />

            <h4>pobrania: {photo.downloads}</h4>

            <button
                className="btn btn-primary"
                onClick={() => onDownload(photo.id)}
            >
                pobierz
            </button>
        </div>
    );
}

export default PhotoCard;