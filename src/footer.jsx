const Footer = ()=> {
    var today = new Date()
    return (
        <footer className="container">
        <div className="row justify-content-center mt-4 mb-3">
            <div className="col-8">
            <p>Team Allocation App - {today.getFullYear()}</p>
        </div>
        </div>
        </footer>
    )
}
export default Footer