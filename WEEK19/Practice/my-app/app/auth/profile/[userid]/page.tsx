export default function Profile({ params }: { params: { userid: string } }) {
  const { userid } = params;

  return (
    <div>
      <h1>Profile Page for User ID: {userid}</h1>
    </div>
  );
}