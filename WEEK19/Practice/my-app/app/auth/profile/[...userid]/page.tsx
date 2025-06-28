export default async function Profile({ params }: { params:Promise<{ userid: string }> }) {
  const { userid } = await params;

  return (
    <div>
      <h1>Profile Page for User ID: {userid}</h1>
    </div>
  );
}