import Card from "../components/card";

var data = [{
    title : "Hola",
    detail : "Detail with more explixit compliment about somethings that i don't know"
},
{
    title: "Title 2",
    detail : "Detail with more explixit compliment about somethings that i don't know"
},
{
    title: "Title 2",
    detail : "Detail with more explixit compliment about somethings that i don't know"
},
{
    title: "Title 2",
    detail : "Detail with more explixit compliment about somethings that i don't know"
},
{
    title: "Title 2",
    detail : "Detail with more explixit compliment about somethings that i don't know"
},
{
    title: "Title 2",
    detail : "Detail with more explixit compliment about somethings that i don't know"
},
]

function FirstPage(){
    return <div className="row">
    <div className="col">
        <h1 className="welcome">hola</h1>
        <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text</p>
        <button type="button">Hola</button>
    </div>
    <div className="col">
        {data.map(card => (<Card title= {card.title} detail = {card.detail}/>)
            
        )}
    </div>
    </div>
}

export default FirstPage;