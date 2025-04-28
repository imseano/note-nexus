import { getFileList } from '@renderer/hooks/getFileList'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { FaChevronRight, FaFile } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

export const FileList = ({ className, ...props }: ComponentProps<'ul'>) => {
  const loadFiles = getFileList()
  if (loadFiles.fileList.length === 0) {
    return (
      <ul className={twMerge('flex flex-col', className)} {...props}>
        Don't look at me, I'm just a placeholder!
      </ul>
    )
  }

  return (
    <ul className={twMerge('flex flex-col', className)} {...props}>
      {loadFiles.fileList.map((file) => (
        <FileListItem name={file.title} isFolder={file.isDir} {...file} />
      ))}
    </ul>
  )
}

export type FileItemProps = ComponentProps<'div'> & {
  name: string
  isFolder?: boolean
  isHovered?: boolean
  onClick?: () => void
}

export const FileListItem = ({
  name,
  isFolder,
  onClick,
  className,
  children,
  ...props
}: FileItemProps) => {
  return (
    <div
      className={cn(
        'flex items-center p-2 gap-3 hover:bg-zinc-500/50 transition-colors duration-100',
        className
      )}
      {...props}
    >
      {isFolder ? <FaChevronRight /> : <FaFile />}
      {children}
      <h3 className="text-sm">{name}</h3>
    </div>
  )
}
