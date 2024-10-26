function Toolbar(){
    function direitos(){
        alert('Criado por Carllon Santos, nº3843004402');
    }
    return (<>
        <div id="toolbar">
            <div className="brand">
                <h2><i className="fa-solid fa-magnifying-glass"></i> Verifica Email</h2>
                
            </div>    
            <button id="checkButton" onClick={direitos}>
                <i class="fa-solid fa-info"></i>
            </button>
        </div>
    </>)
}

export default Toolbar