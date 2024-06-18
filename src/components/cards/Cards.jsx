import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { profilelist, isUserValid } from '../../../lib/pocketbase';
import { getRelativeTime } from './useDate';

function Cards({ currentPage, itemsPerPage }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        profilelist()
            .then(res => {
                // Sort data by 'created' timestamp in descending order
                res.sort((a, b) => new Date(b.created) - new Date(a.created));
                setData(res);
            })
            .catch(err => console.log(err));
    }, []);

    const productimage = productname => {
        switch (productname.toLowerCase()) {
            case 'milk':
                return 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
            case 'desi ghee':
                return 'https://images.healthshots.com/healthshots/en/uploads/2021/11/03180439/which-ghee-is-better-770x433.jpg';
            case 'curd':
                return 'https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/How_To_Make_Fresh_Homemade_Yogurt_Curd.jpg';
            case 'paneer':
                return 'https://myfoodstory.com/wp-content/uploads/2016/10/How-to-make-Paneer-3.jpg';
            case 'khoya':
                return 'https://www.grocio.in/upload_images/product/big/4121620396860.jpg';
            case 'white butter':
                return 'https://static.toiimg.com/thumb/55600690.cms?imgsize=193758&width=509&height=340';
            case 'cheese':
                return 'https://www.usatoday.com/gcdn/media/2022/07/01/USATODAY/usatsports/imageForEntry2-ueq.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp';
            case 'cream':
                return 'https://www.onceuponachef.com/images/2022/06/whipped-cream-1536x1009.jpg';
            default:
                return '';
        }
    };

    let currentItems = data;

    if (currentPage && itemsPerPage) {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    }

    return (
        <>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-4 mt-5 mb-20">
                {currentItems.map((item, index) => (
                    <Card
                        shadow="sm"
                        key={index}
                        isPressable
                        onPress={() => console.log('item pressed')}
                    >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-72"
                                src={productimage(item.product_name)}
                            />
                        </CardBody>
                        {isUserValid ? (
                            <>
                                <CardFooter className="text-small justify-between">
                                    <b>{item.product_name}</b>
                                    <p className="">Rs. {item.price} /Kg</p>
                                </CardFooter>
                                <CardFooter className="text-small justify-between">
                                    <p>{item.dairy_name}</p>
                                    <p>{getRelativeTime(item.created)}</p>
                                </CardFooter>
                            </>
                        ) : (
                            <CardFooter className="text-small justify-between">
                                <b>{item.product_name}</b>
                                <p>{getRelativeTime(item.created)}</p>
                            </CardFooter>
                        )}
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Cards;
