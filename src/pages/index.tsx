import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton redirectUrl="https://mentorfy.com.br"/>
        <p>This content is public. Only signed out users can see this.</p>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <p>This content is private. Only signed in users can see this.</p>
      </SignedIn>
    </div>
  );
}

