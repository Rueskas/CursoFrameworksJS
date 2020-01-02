import React from 'react';

const ErrorPage = () => {
    return (
        <React.Fragment>
            <h2 className="subheader">ERROR 404: Página no encontrada</h2>
            <p>
                No se ha encontrado la página a la que intentas acceder
            </p>
        </React.Fragment>
    );
}

export default ErrorPage;