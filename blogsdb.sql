-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2024 at 08:52 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs_t`
--

CREATE TABLE `blogs_t` (
  `id` bigint(20) NOT NULL,
  `userId` bigint(20) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `body` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs_t`
--

INSERT INTO `blogs_t` (`id`, `userId`, `title`, `body`) VALUES
(101706555343182, 22125, 'Hello', 'Hello, this is a body section.');

-- --------------------------------------------------------

--
-- Table structure for table `comments_t`
--

CREATE TABLE `comments_t` (
  `id` bigint(20) NOT NULL,
  `blogId` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `body` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs_t`
--
ALTER TABLE `blogs_t`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments_t`
--
ALTER TABLE `comments_t`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blogId` (`blogId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments_t`
--
ALTER TABLE `comments_t`
  ADD CONSTRAINT `blogId` FOREIGN KEY (`blogId`) REFERENCES `blogs_t` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_t_ibfk_1` FOREIGN KEY (`blogId`) REFERENCES `blogs_t` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
