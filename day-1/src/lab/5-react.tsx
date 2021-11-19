/**
 * TODO(8)
 **/

// 8.1) Type this React component.
// Hint: It's literally just a function!
// Hint 2: You don't have to specify the return type. It can be inferred.

const placeholder = "https://picsum.photos/200/200"

export function UserProfileCard(props) {
  const { user } = props ?? {}
  const { username, age, photo = placeholder } = user ?? {}

  return (
    <section className="user-profile-card">
      <img src={photo} alt="Profile" />

      <h1>{username}</h1>
      <p>Age {age}</p>
    </section>
  )
}
