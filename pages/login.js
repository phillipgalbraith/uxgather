import Link from 'next/link'

export default function Login() {
  return (
    <div>
      <h2>Sign In</h2>
      <form action="/send-data-here" method="post">
  <label for="username">username</label>
  <input
    type="text"
    id="username"
    name="username"
    required
    minlength="10"
    maxlength="20"
  />
  <label for="password">Password</label>
  <input 
    type="text" 
    id="password" 
    name="password" 
    required 
    minlength="8"
    maxlength="20"
  />
  <button type="submit"><Link href="/dashboard">Submit</Link></button>
</form>

      <Link href="/">back to landing page</Link>
    </div>
  )
}
