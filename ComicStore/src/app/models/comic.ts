export class Comic {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    publishDate: Date;
    starRating: number; 
    imageUrl: string;

    static build() : Comic{
        return <Comic> {
            id:0,
            title: '',
            author:'',
            description:'',
            price: 0,
            publishDate: new Date(),
            starRating: 1,
            imageUrl:''
        };
    }
}

