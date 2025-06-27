export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
        <div>AUth Header not for user</div>
        {children}
      </div>
    
  );
}