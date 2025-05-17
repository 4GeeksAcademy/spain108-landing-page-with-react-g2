const Jumbotron = () => {

    return (
        <div className="container my-5">
            <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <h1 className="text-body-emphasis">Hello World</h1>
                <p className="col-lg-6 mx-auto mb-4">
                    This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
                </p>
                <button className="btn btn-primary px-5 mb-5" type="button">Call to action</button>
            </div>
        </div>  
    );
};

export default Jumbotron;