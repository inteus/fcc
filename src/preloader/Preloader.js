import React from 'react';

const Preloader = () => {
    return (
        <div class="d-flex justify-content-center" style={{ margin: "50px" }}>
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Preloader;