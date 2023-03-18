const Header = ({teamMemberCount, selectedTeam})=> {
    return (
        <header className="container">
            <div className="row justify-content-center mt-4 mb-3">
            <div className="col-8">
            <h1 className="mt-4 p5 bg-primary text-white rounded">Team Allocation</h1>
            <h4>{selectedTeam} has {teamMemberCount} Members</h4>
            </div>
            </div>
        </header>
    )
}
export default Header