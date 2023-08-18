import Navigation from '@/components/Navigation';
import Script from 'next/script';


export const metadata = {
  title: 'Bread Of Life',
  description: 'Worship God with us!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></Script>

      </head>
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  )
}
