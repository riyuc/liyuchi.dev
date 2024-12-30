import React from 'react'
import Label from '@/components/ui/label'
import { IconBriefcase2, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'

const Socials = () => {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4 '>
            <Label
                as="a"
                href="https://intactlab.ca/"
                title='@Intact Labs'
            >
                <IconBriefcase2 className='h-6 w-6'/>
            </Label>
            <Label 
                as="a"
                href="https://www.linkedin.com/in/ducanhnguyen0"
                title='LinkedIn'
            >
                <IconBrandLinkedin className='h-6 w-6'/>
            </Label>
            <Label
                as="a"
                href="https://github.com/riyuc"
                title='GitHub'
            >
                <IconBrandGithub className='h-6 w-6'/>
            </Label>
            <Label
                as="a"
                href="https://github.com/riyuc"
                title='GitHub'
            >
                <IconBrandGithub className='h-6 w-6'/>
            </Label>
        </div>
  )
}

export default Socials