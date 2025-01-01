import ApolloProvider from "@/lib/ApolloProvider";
import "../styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <ApolloProvider>
         <Header />
          <div className="container mx-auto p-4">{children}</div>
          <Footer />
          </ApolloProvider>
      </body>
    </html>
  );
}
