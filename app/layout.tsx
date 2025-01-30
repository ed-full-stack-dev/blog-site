import ApolloProvider from "@/lib/ApolloProvider";
import "../styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

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
          <div className=" max-w-[1600px] mx-auto ">{children}</div>
          <Footer />
          </ApolloProvider>
      </body>
    </html>
  );
}
