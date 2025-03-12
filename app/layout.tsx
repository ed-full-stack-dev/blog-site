import ApolloProvider from "@/lib/ApolloProvider";
import "../styles/globals.css";
// import Footer from "@/components/footer";
import Header from "@/components/layout/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className=" max-w-[1600px] mx-auto ">
        <ApolloProvider>
          <Header />
          <div>{children}</div>
          {/* <Footer /> */}
          </ApolloProvider>
      </body>
    </html>
  );
}
