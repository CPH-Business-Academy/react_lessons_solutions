import { useState, useEffect } from "react";

export default function ListDemo() {
  const initialMembers = [
    { name: "Peter", age: 18, id: 0 },
    { name: "Hanne", age: 35, id: 1 },
    { name: "Janne", age: 25, id: 2 },
    { name: "Holger", age: 22, id: 3 },
  ];
  const [members, setMembers] = useState(initialMembers);

  function MemberTable({ members }) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  function MemberDemo(props) {
    return (
      <div>
        <h4>All Members</h4>
        <MemberTable members={initialMembers} />
      </div>
    );
  }

  return <MemberDemo members={members} />;
}
