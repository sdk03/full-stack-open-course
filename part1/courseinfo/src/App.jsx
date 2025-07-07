//Header Component
const Header = (props) =>{
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

//Individual Part Components
const Part1 = (props) => {
  return (
    <>
    <p>
        {props.part1} {props.exercises1}
    </p>
    </>
  )
} 

const Part2 = (props) => {
  return (
    <>
    <p>
        {props.part2} {props.exercises2}
    </p>
    </>
  )
} 

const Part3 = (props) => {
  return (
    <>
    <p>
        {props.part3} {props.exercises3}
    </p>
    </>
  )
} 

// Course Component (Collective Parts)

const Course = (props) => {
  
  const parts = props.parts
  return(
    <>
    <Part1 part1={parts[0].name} exercises1={parts[0].excercises} />
    <Part2 part2={parts[1].name} exercises2={parts[1].excercises} />
    <Part3 part3={parts[2].name} exercises3={parts[2].excercises} />
    </>
  )
}

//Total Component
const Total = (props) =>{
  const parts = props.parts
  return(
    <p>Number of exercises {parts[0].excercises + parts[1].excercises + parts[2].excercises}</p>
  )
}


// Main App Component
const App = () =>{
  const course = {
    name: 'Half Stack application development',
    parts : [  
      {name: 'Fundamentals of React', excercises:10 },
      {name: 'Using props to pass data', excercises:7},
      {name: 'State of a component', excercises:14  }
  ]
}
  return(
     <div>
      <Header course={course.name} />
      <Course parts={course.parts}/>
      <Total  parts={course.parts} />
    </div>
  )
}

export default App