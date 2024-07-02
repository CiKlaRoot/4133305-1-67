import {SessionProvider} from "./components/SessionProvider"
import { getServerSession } from "next-auth";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session ={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
