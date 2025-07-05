interface UserProfileProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

export default function UserProfile({ name, age, isAdmin }: UserProfileProps) {
  return (
    <div>
      <p>{isAdmin ? "관리자계정" : "일반 사용자"}</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
}
