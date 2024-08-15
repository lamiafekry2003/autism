import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
export default function Loading() {
    return (

            <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow h-[200px]'>
          <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          {/* For other variants, adjust the size with `width` and `height` */}
         <div className=' flex gap-3'>
         <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={210} height={20} />
         </div>
          <Skeleton variant="rectangular" width={210} height={10} />
          <Skeleton variant="rounded" width={210} height={10} />
        </Stack>

         

       </div>
    )
  }