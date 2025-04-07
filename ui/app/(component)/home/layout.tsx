export default function RootLayout({
  children,
  user,
  top,
  drawer,
}: Readonly<{
  children: React.ReactNode;
  user: React.ReactNode;
  top: React.ReactNode;
  drawer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {drawer}
        {top}
        {user}
        {children}
      </body>
    </html>
  );
}
