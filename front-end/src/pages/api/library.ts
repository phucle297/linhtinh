import library from 'constant/json/library.json'
export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    if (req.query.libraryType === 'ongoing') {
      res.status(200).json({
        success: true,
        // data: { library: ongoingLibrary }
        data: {
          library: {
            data: [],
            total: 0
          }
        }
      })
    } else
      res.status(200).json({
        success: true,
        data: { library }
      })
  }
}
