export const feedback =[
    {
        id:1,
        message:"food was good"
    },
    {
        id:2,
        message:"Service was good"
    }
]


export async function GET(request) {
    
    return Response.json({
        status:200,
        message:"Yahoo"
    })
}