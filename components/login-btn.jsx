import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
  const { data: session } = useSession()

  const handleGoogleAuth = async () => {
        
    // callbackurl com u minusculo redireciona para a api do google
    // callbackUrl com U maiusculo redireciona o usuário depois de logado.
    await signIn('google', {
        callbackurl: 'http://eadev.vercel.app/api/auth/callback/google',
        callbackUrl: '/'
    })
    
  }

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => handleGoogleAuth()}>Sign in</button>
    </>
  )
}