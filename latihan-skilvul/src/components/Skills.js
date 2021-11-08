import Skillitem from "./SkillItem"
function Skills() {
  let skills = [
    { name: "ngoding", img: "https://th.bing.com/th/id/OIP.itMGCjNIIpQCN8lUKdEt-gHaE8?pid=ImgDet&rs=1" },
    { name: "Designn Grafis", img: "https://th.bing.com/th/id/OIP.oUGCTBA0R-ulIETSJeKMXwHaFW?w=229&h=180&c=7&r=0&o=5&pid=1.7" },
  ]
  return (
    <div id="skills">
      <h2>My Skills</h2>
      <div class="skills-list">
        {skills.map((item) => (
          <div class="skill-item">
            {/* <img src={item.img} width="200" />
            <h3>{item.name}</h3> */}
            <Skillitem skills={item}/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Skills