// CardList.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const CardList = ({ cardData }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {cardData.map((data) => (
        <Card key={data.id} className="w-full lg:w-full xl:w-1/1 hover:w-100 transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:scale-105">
          <CardHeader floated={false} className="h-44 max-h-44 hover:scale-110 transition-transform transform hover:-translate-y-1 cursor-pointer">
            <img src={data.imageSrc} alt="profile-picture " />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 font-noto-700 transition-transform transform hover:-translate-y-1">
              {data.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium font-noto-400 transition-transform transform hover:-translate-y-1" textGradient>
              @{data.title}
            </Typography>
            <div className="flex justify-between w-full mt-4 mb-2">
              <div className="flex flex-col items-center">
                <span className="font-noto-700 text-lg transition-transform transform hover:-translate-y-1">{data.post}</span>
                <span className="text-sm font-noto-400 text-gray-500">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-noto-700 text-lg transition-transform transform hover:-translate-y-1">{data.followes}</span>
                <span className="text-sm font-noto-400 text-gray-500">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-noto-700 text-lg transition-transform transform hover:-translate-y-1">{data.followings}</span>
                <span className="text-sm font-noto-400 text-gray-500">Likes</span>
              </div>
            </div>
          </CardBody>

          <CardFooter className="flex justify-center gap-7 pt-2 ">
            <Tooltip content="Like">
              <Typography
                as="a"
                href={data.social.facebook}
                variant="lead"
                color="blue"
                textGradient
              >
                <FontAwesomeIcon icon={faFacebook} className="hover:scale-150 transition-transform transform icon-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={data.social.twitter}
                variant="lead"
                color="light-blue"
                textGradient
              >
                <FontAwesomeIcon icon={faTwitter} className="hover:scale-150 transition-transform transform icon-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={data.social.instagram}
                variant="lead"
                color="purple"
                textGradient
              >
                <FontAwesomeIcon icon={faInstagram} className="hover:scale-150 transition-transform transform icon-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={data.social.instagram}
                variant="lead"
                color="purple"
                textGradient
              >
                <FontAwesomeIcon icon={faLine} className="hover:scale-150 transition-transform transform icon-Line" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardList;
