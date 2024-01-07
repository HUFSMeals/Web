export interface ReviewData 
{
	msg : string;
	data : [
		{
			id : number;
			nickname : string;
			title : string;
			body : string;
			created_at : string;
			score : number;
			image : [
				{
					id : number;
					review_image : string;
				}
			]
		}
	]
}

